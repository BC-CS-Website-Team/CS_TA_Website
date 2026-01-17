
import React, { useState, useEffect } from 'react';
import {
    Box,
    Button,
    FormControl,
    FormLabel,
    Input,
    VStack,
    HStack,
    Textarea,
    Select,
    IconButton,
    Text,
    useToast
} from '@chakra-ui/react';
import { DeleteIcon, AddIcon } from '@chakra-ui/icons';

const MemberForm = ({ initialData, onSubmit, onCancel }) => {
    const [formData, setFormData] = useState({
        id: '',
        name: '',
        image: '',
        email: '',
        role: 'TA',
        hours_json: '[]',
        courses_json: '[]',
        links_json: '[]',
        ...initialData,
    });

    // Helper to safely parse JSON field for UI editing if needed, 
    // but for now we will keep them as text strings for simplicity 
    // or implement a basic JSON editor if requested. 
    // Given the request for "easier to interact", let's try to provide 
    // a slightly better UI for these arrays if possible, but start with textareas for the JSON arrays.

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        onSubmit(formData);
    };

    return (
        <Box as="form" onSubmit={handleSubmit} width="100%" p={4} borderWidth="1px" borderRadius="lg">
            <VStack spacing={4} align="stretch">
                <FormControl isRequired>
                    <FormLabel>ID (Slug)</FormLabel>
                    <Input name="id" value={formData.id} onChange={handleChange} placeholder="e.g. john-doe" />
                </FormControl>

                <FormControl isRequired>
                    <FormLabel>Name</FormLabel>
                    <Input name="name" value={formData.name} onChange={handleChange} placeholder="John Doe" />
                </FormControl>

                <FormControl isRequired>
                    <FormLabel>Image Filename</FormLabel>
                    <Input name="image" value={formData.image} onChange={handleChange} placeholder="John.jpg" />
                </FormControl>

                <FormControl isRequired>
                    <FormLabel>Email</FormLabel>
                    <Input name="email" value={formData.email} onChange={handleChange} type="email" />
                </FormControl>

                <FormControl isRequired>
                    <FormLabel>Role</FormLabel>
                    <Select name="role" value={formData.role} onChange={handleChange}>
                        <option value="TA">TA</option>
                        <option value="Lead">Lead</option>
                    </Select>
                </FormControl>

                <FormControl>
                    <FormLabel>Hours (JSON)</FormLabel>
                    <Textarea
                        name="hours_json"
                        value={formData.hours_json}
                        onChange={handleChange}
                        fontFamily="monospace"
                        rows={3}
                    />
                    <Text fontSize="xs" color="gray.500">Format: JSON Array of arrays of objects</Text>
                </FormControl>

                <FormControl>
                    <FormLabel>Courses (JSON)</FormLabel>
                    <Textarea
                        name="courses_json"
                        value={formData.courses_json}
                        onChange={handleChange}
                        fontFamily="monospace"
                        rows={3}
                    />
                    <Text fontSize="xs" color="gray.500">Format: JSON Array of arrays of strings</Text>
                </FormControl>

                <FormControl>
                    <FormLabel>Links (JSON)</FormLabel>
                    <Textarea
                        name="links_json"
                        value={formData.links_json}
                        onChange={handleChange}
                        fontFamily="monospace"
                        rows={3}
                    />
                    <Text fontSize="xs" color="gray.500">Format: JSON Array of arrays of [Label, URL]</Text>
                </FormControl>

                <HStack spacing={4} justify="flex-end" pt={4}>
                    <Button onClick={onCancel}>Cancel</Button>
                    <Button colorScheme="blue" type="submit">Save</Button>
                </HStack>
            </VStack>
        </Box>
    );
};

export default MemberForm;
