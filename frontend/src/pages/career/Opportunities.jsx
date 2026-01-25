/**
 * Opportunities.jsx
 * Opportunities page component
 */
import React, { useState, useEffect } from 'react'
import { FaPlus } from 'react-icons/fa'
import Button from '../../components/atoms/Button'
import OpportunityList from '../../components/organisms/OpportunityList'
import ManageOpportunityModal from '../../components/organisms/ManageOpportunityModal'
import { fetchOpportunities, createOpportunity, updateOpportunity, deleteOpportunity } from '../../services/opportunities'

const Opportunities = () => {
    const [opportunities, setOpportunities] = useState([])
    const [isLoading, setIsLoading] = useState(true)
    const [error, setError] = useState(null)

    // Modal State
    const [isModalOpen, setIsModalOpen] = useState(false)
    const [editingOpportunity, setEditingOpportunity] = useState(null)

    const loadOpportunities = async () => {
        try {
            setIsLoading(true)
            const data = await fetchOpportunities()
            setOpportunities(data)
            setError(null)
        } catch (err) {
            console.error('Failed to load opportunities:', err)
            setError('Failed to load opportunities. Please try again later.')
        } finally {
            setIsLoading(false)
        }
    }

    useEffect(() => {
        loadOpportunities()
    }, [])

    const handleCreate = () => {
        setEditingOpportunity(null)
        setIsModalOpen(true)
    }

    const handleEdit = (opportunity) => {
        setEditingOpportunity(opportunity)
        setIsModalOpen(true)
    }

    const handleDelete = async (id) => {
        if (window.confirm('Are you sure you want to delete this opportunity?')) {
            try {
                await deleteOpportunity(id)
                loadOpportunities()
            } catch (err) {
                console.error('Failed to delete:', err)
                alert('Failed to delete opportunity')
            }
        }
    }

    const handleSubmit = async (formData) => {
        try {
            if (editingOpportunity) {
                await updateOpportunity(editingOpportunity.id, formData)
            } else {
                await createOpportunity(formData)
            }
            setIsModalOpen(false)
            loadOpportunities()
        } catch (err) {
            console.error('Failed to save:', err)
            alert('Failed to save opportunity')
        }
    }

    return (
        <div className="space-y-8">
            <div className="flex justify-between items-center border-b pb-6">
                <div>
                    <h1 className="text-3xl font-bold text-gray-900 mb-2">
                        Opportunities
                    </h1>
                    <p className="text-lg text-gray-600">
                        Explore various opportunities to help you enhance your education and career.
                    </p>
                </div>
                <Button onClick={handleCreate} variant="primary" className="flex items-center">
                    <FaPlus className="mr-2" /> Add Opportunity
                </Button>
            </div>

            {error && (
                <div className="bg-red-50 text-red-700 p-4 rounded-md">
                    {error}
                </div>
            )}

            {isLoading ? (
                <div className="flex justify-center py-12">
                    <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary-600"></div>
                </div>
            ) : (
                <OpportunityList
                    opportunities={opportunities}
                    onEdit={handleEdit}
                    onDelete={handleDelete}
                />
            )}

            <ManageOpportunityModal
                isOpen={isModalOpen}
                onClose={() => setIsModalOpen(false)}
                onSubmit={handleSubmit}
                initialData={editingOpportunity}
            />
        </div>
    )
}

export default Opportunities
