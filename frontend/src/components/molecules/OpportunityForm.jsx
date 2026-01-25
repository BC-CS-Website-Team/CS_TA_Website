import React, { useState, useEffect } from 'react';
import Input from '../atoms/Input';
import Select from '../atoms/Select';
import TextArea from '../atoms/TextArea';
import Button from '../atoms/Button';
import FileUpload from '../atoms/FileUpload';
import { uploadOpportunityImage } from '../../services/opportunities';

const OpportunityForm = ({ initialData, onSubmit, onCancel }) => {
    const [formData, setFormData] = useState({
        name: '',
        opportunity_description: '',
        opportunity_type: 'internship',
        source: 'web',
        deadline: '',
        opportunity_image: '',
        link: '',
    });

    const [hasTime, setHasTime] = useState(false);
    const [selectedFile, setSelectedFile] = useState(null);

    useEffect(() => {
        if (initialData) {
            const dateStr = initialData.deadline || '';
            // Check if there is a specific time component (not midnight UTC, which is default for date-only)
            // This is a heuristic. 
            // Better: just check if we have a dateStr. If we do, assume hasTime=true for safety 
            // OR let user decide. Let's default to hasTime=true if it exists, user can uncheck.
            const hasTimeInit = !!dateStr;

            setHasTime(hasTimeInit);

            setFormData({
                name: initialData.name || '',
                opportunity_description: initialData.opportunity_description || '',
                opportunity_type: initialData.opportunity_type || 'internship',
                source: initialData.source || 'web',
                deadline: dateStr ? new Date(dateStr).toISOString().slice(0, 16) : '',
                opportunity_image: initialData.opportunity_image || '',
                link: initialData.link || '',
            });
        }
    }, [initialData]);

    const handleChange = (e) => {
        const { id, value } = e.target;
        setFormData((prev) => ({
            ...prev,
            [id]: value,
        }));
    };

    const handleToggleTime = (e) => {
        const wantsTime = e.target.checked;
        setHasTime(wantsTime);

        if (formData.deadline) {
            if (wantsTime) {
                // Formatting for datetime-local: YYYY-MM-DDTHH:mm
                if (formData.deadline.length === 10) {
                    setFormData(prev => ({ ...prev, deadline: `${prev.deadline}T12:00` }));
                }
            } else {
                // Formatting for date: YYYY-MM-DD
                setFormData(prev => ({ ...prev, deadline: prev.deadline.split('T')[0] }));
            }
        }
    }

    const handleFileChange = (file) => {
        setSelectedFile(file);
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        let dataToSubmit = { ...formData };

        // Format deadline for backend
        if (dataToSubmit.deadline) {
            dataToSubmit.deadline = new Date(dataToSubmit.deadline).toISOString();
        }

        if (selectedFile) {
            try {
                const uploadResult = await uploadOpportunityImage(selectedFile);
                dataToSubmit.opportunity_image = uploadResult.url;
            } catch (error) {
                console.error("Image upload failed", error);
                alert("Failed to upload image. Submitting without new image.");
            }
        }

        onSubmit(dataToSubmit);
    };

    return (
        <form onSubmit={handleSubmit} className="space-y-4">
            <Input
                id="name"
                label="Title"
                value={formData.name}
                onChange={handleChange}
                required
            />

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <Select
                    id="opportunity_type"
                    label="Type"
                    value={formData.opportunity_type}
                    onChange={handleChange}
                    options={[
                        { value: 'internship', label: 'Internship' },
                        { value: 'job', label: 'Job' },
                        { value: 'hackathon', label: 'Hackathon' },
                        { value: 'other', label: 'Other' },
                    ]}
                />

                <div>
                    <Input
                        id="deadline"
                        label="Deadline"
                        type={hasTime ? "datetime-local" : "date"}
                        value={formData.deadline}
                        onChange={handleChange}
                    />
                    <div className="flex items-center -mt-3 mb-4">
                        <input
                            id="hasTime"
                            type="checkbox"
                            checked={hasTime}
                            onChange={handleToggleTime}
                            className="h-4 w-4 text-primary-600 focus:ring-primary-500 border-gray-300 rounded"
                        />
                        <label htmlFor="hasTime" className="ml-2 block text-sm text-gray-700">
                            Include Specific Time
                        </label>
                    </div>
                </div>
            </div>

            <FileUpload
                id="opportunity_image"
                label="Cover Image"
                value={formData.opportunity_image}
                onChange={handleFileChange}
            />

            <Input
                id="link"
                label="Application/Info Link (Optional)"
                type="url"
                placeholder="https://company.com/apply"
                value={formData.link}
                onChange={handleChange}
            />

            <TextArea
                id="opportunity_description"
                label="Description"
                value={formData.opportunity_description}
                onChange={handleChange}
                required
                rows={5}
            />

            <div className="flex justify-end space-x-3 pt-4 border-t">
                <Button variant="secondary" onClick={onCancel}>
                    Cancel
                </Button>
                <Button type="submit" variant="primary">
                    {initialData ? 'Update' : 'Create'}
                </Button>
            </div>
        </form>
    );
};

export default OpportunityForm;
