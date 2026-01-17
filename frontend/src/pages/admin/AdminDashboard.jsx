
import React, { useState, useEffect } from 'react';
import {
    Box,
    Heading,
    Table,
    Thead,
    Tbody,
    Tr,
    Th,
    Td,
    Button,
    useToast,
    Container,
    HStack,
    Text,
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalBody,
    ModalCloseButton,
    useDisclosure,
    IconButton
} from '@chakra-ui/react';
import { AddIcon, EditIcon, DeleteIcon } from '@chakra-ui/icons';
import MemberForm from '../../components/admin/MemberForm';

const AdminDashboard = () => {
    const [members, setMembers] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [editingMember, setEditingMember] = useState(null);
    const { isOpen, onOpen, onClose } = useDisclosure();
    const toast = useToast();

    const fetchData = async () => {
        try {
            setIsLoading(true);
            const res = await fetch('/api/admin/data');
            if (!res.ok) throw new Error('Failed to fetch data');
            const data = await res.json();
            setMembers(data);
        } catch (error) {
            toast({
                title: 'Error loading data',
                description: error.message,
                status: 'error',
                duration: 5000,
                isClosable: true,
            });
        } finally {
            setIsLoading(false);
        }
    };

    useEffect(() => {
        fetchData();
    }, []);

    const handleSave = async (memberData) => {
        try {
            let updatedMembers;
            if (editingMember && editingMember.id === memberData.id) {
                // Update existing (this logic assumes ID doesn't change for simplicity, or handles it if it does)
                // If ID changes, we might treat it as a new entry or need logic to remove old ID.
                // For now, let's assume we map by index or just replace the list.
                updatedMembers = members.map(m => m.id === editingMember.id ? memberData : m);
            } else {
                // Add new
                if (members.find(m => m.id === memberData.id)) {
                    // Simple check for duplicate ID
                    toast({ title: 'Error', description: 'ID already exists', status: 'error' });
                    return;
                }
                updatedMembers = [...members, memberData];
            }

            const res = await fetch('/api/admin/data', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(updatedMembers),
            });

            if (!res.ok) throw new Error('Failed to save data');

            setMembers(updatedMembers);
            onClose();
            setEditingMember(null);
            toast({
                title: 'Success',
                description: 'Data saved successfully',
                status: 'success',
                duration: 3000,
                isClosable: true,
            });
        } catch (error) {
            toast({
                title: 'Error saving data',
                description: error.message,
                status: 'error',
                duration: 5000,
                isClosable: true,
            });
        }
    };

    const handleDelete = async (id) => {
        if (!window.confirm('Are you sure you want to delete this member?')) return;

        try {
            const updatedMembers = members.filter(m => m.id !== id);
            const res = await fetch('/api/admin/data', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(updatedMembers),
            });

            if (!res.ok) throw new Error('Failed to delete member');

            setMembers(updatedMembers);
            toast({
                title: 'Success',
                description: 'Member deleted',
                status: 'success',
                duration: 3000,
                isClosable: true,
            });
        } catch (error) {
            toast({
                title: 'Error',
                description: error.message,
                status: 'error',
            });
        }
    };

    const openAddModal = () => {
        setEditingMember(null);
        onOpen();
    };

    const openEditModal = (member) => {
        setEditingMember(member);
        onOpen();
    };

    return (
        <Container maxW="container.xl" py={8}>
            <HStack justify="space-between" mb={8}>
                <Heading>Admin Dashboard</Heading>
                <Button leftIcon={<AddIcon />} colorScheme="green" onClick={openAddModal}>
                    Add Member
                </Button>
            </HStack>

            <Box overflowX="auto">
                <Table variant="simple">
                    <Thead>
                        <Tr>
                            <Th>ID</Th>
                            <Th>Name</Th>
                            <Th>Role</Th>
                            <Th>Email</Th>
                            <Th>Actions</Th>
                        </Tr>
                    </Thead>
                    <Tbody>
                        {members.map((member) => (
                            <Tr key={member.id}>
                                <Td>{member.id}</Td>
                                <Td>{member.name}</Td>
                                <Td>{member.role}</Td>
                                <Td>{member.email}</Td>
                                <Td>
                                    <HStack spacing={2}>
                                        <IconButton
                                            icon={<EditIcon />}
                                            aria-label="Edit"
                                            size="sm"
                                            onClick={() => openEditModal(member)}
                                        />
                                        <IconButton
                                            icon={<DeleteIcon />}
                                            aria-label="Delete"
                                            size="sm"
                                            colorScheme="red"
                                            onClick={() => handleDelete(member.id)}
                                        />
                                    </HStack>
                                </Td>
                            </Tr>
                        ))}
                    </Tbody>
                </Table>
            </Box>

            <Modal isOpen={isOpen} onClose={onClose} size="xl">
                <ModalOverlay />
                <ModalContent>
                    <ModalHeader>{editingMember ? 'Edit Member' : 'Add New Member'}</ModalHeader>
                    <ModalCloseButton />
                    <ModalBody pb={6}>
                        <MemberForm
                            initialData={editingMember || {}}
                            onSubmit={handleSave}
                            onCancel={onClose}
                        />
                    </ModalBody>
                </ModalContent>
            </Modal>
        </Container>
    );
};

export default AdminDashboard;
