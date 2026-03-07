import React, { useCallback, useState, useEffect } from 'react';
import { FaCloudUploadAlt, FaTimes } from 'react-icons/fa';

export interface FileUploadProps {
    label?: string;
    id: string;
    value?: string | null;
    onChange: (file: File | null) => void;
    accept?: string;
}

const FileUpload: React.FC<FileUploadProps> = ({ label, id, value, onChange, accept = "image/*" }) => {
    const [dragActive, setDragActive] = useState(false);
    const [preview, setPreview] = useState(value || null);

    useEffect(() => {
        if (typeof value === 'string') {
            setPreview(value);
        } else if (value === null) { // Handle case where value is explicitly set to null
            setPreview(null);
        }
    }, [value]);

    const handleDrag = useCallback((e: React.DragEvent<HTMLDivElement>) => {
        e.preventDefault();
        e.stopPropagation();
        if (e.type === "dragenter" || e.type === "dragover") {
            setDragActive(true);
        } else if (e.type === "dragleave") {
            setDragActive(false);
        }
    }, []);

    const handleDrop = useCallback((e: React.DragEvent<HTMLDivElement>) => {
        e.preventDefault();
        e.stopPropagation();
        setDragActive(false);
        if (e.dataTransfer.files && e.dataTransfer.files[0]) {
            handleFile(e.dataTransfer.files[0]);
        }
    }, [onChange]); // Add onChange to deps

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        e.preventDefault();
        if (e.target.files && e.target.files[0]) {
            handleFile(e.target.files[0]);
        }
    };

    const handleFile = (file: File) => {
        // Create local preview
        const objectUrl = URL.createObjectURL(file);
        setPreview(objectUrl);

        // Propagate file up
        onChange(file);
    };

    const handleRemove = () => {
        setPreview(null);
        onChange(null);
    };

    return (
        <div className="mb-4">
            {label && (
                <label htmlFor={id} className="block text-sm font-medium text-gray-700 mb-1">
                    {label}
                </label>
            )}

            {preview ? (
                <div className="relative w-full h-48 bg-gray-100 rounded-md overflow-hidden border border-gray-300">
                    <img src={preview} alt="Preview" className="w-full h-full object-contain" />
                    <button
                        type="button"
                        onClick={handleRemove}
                        className="absolute top-2 right-2 bg-red-600 text-white p-1 rounded-full hover:bg-red-700 focus:outline-none"
                    >
                        <FaTimes />
                    </button>
                </div>
            ) : (
                <div
                    className={`relative flex flex-col items-center justify-center w-full h-32 border-2 border-dashed rounded-lg cursor-pointer transition-colors
                ${dragActive ? 'border-primary-500 bg-primary-50' : 'border-gray-300 bg-gray-50 hover:bg-gray-100'}`}
                    onDragEnter={handleDrag}
                    onDragLeave={handleDrag}
                    onDragOver={handleDrag}
                    onDrop={handleDrop}
                >
                    <input
                        id={id}
                        type="file"
                        className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                        onChange={handleChange}
                        accept={accept}
                    />
                    <FaCloudUploadAlt className="text-3xl text-gray-400 mb-2" />
                    <p className="text-sm text-gray-500">
                        <span className="font-semibold">Click to upload</span> or drag and drop
                    </p>
                    <p className="text-xs text-gray-500">SVG, PNG, JPG or GIF</p>
                </div>
            )}
        </div>
    );
};

export default FileUpload;
