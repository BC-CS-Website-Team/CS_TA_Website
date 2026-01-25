import React from 'react';
import Card from '../atoms/Card';
import Badge from '../atoms/Badge';
import Button from '../atoms/Button';
import { FaEdit, FaTrash } from 'react-icons/fa';

const OpportunityCard = ({ opportunity, onEdit, onDelete }) => {
    return (
        <Card className="h-full flex flex-col">
            {opportunity.opportunity_image && (
                <div className="relative h-48 w-full overflow-hidden bg-gray-100">
                    <img
                        src={opportunity.opportunity_image}
                        alt={opportunity.name}
                        className="w-full h-full object-cover"
                        onError={(e) => { e.target.style.display = 'none' }}
                    />
                </div>
            )}
            <div className="p-6 flex-grow">
                {/* Uploader Info */}
                {opportunity.opportunity_uploader && (
                    <div className="flex items-center mb-4 pb-4 border-b border-gray-100">
                        {opportunity.opportunity_uploader.profile_picture ? (
                            <img
                                src={opportunity.opportunity_uploader.profile_picture}
                                alt={`${opportunity.opportunity_uploader.first_name} ${opportunity.opportunity_uploader.last_name}`}
                                className="w-8 h-8 rounded-full object-cover mr-2"
                            />
                        ) : (
                            <div className="w-8 h-8 rounded-full bg-primary-100 text-primary-600 flex items-center justify-center mr-2 text-xs font-bold">
                                {opportunity.opportunity_uploader.first_name?.[0]}{opportunity.opportunity_uploader.last_name?.[0]}
                            </div>
                        )}
                        <span className="text-sm font-medium text-gray-700">
                            {opportunity.opportunity_uploader.first_name} {opportunity.opportunity_uploader.last_name}
                        </span>
                    </div>
                )}

                <div className="flex justify-between items-start mb-4">
                    <Badge type={opportunity.opportunity_type} />
                    <div className="text-right">
                        <span className="block text-xs text-gray-500">
                            Added: {new Date(opportunity.date_added).toLocaleDateString()}
                        </span>
                        {opportunity.deadline && (
                            <span className="block text-xs font-semibold text-red-600 mt-1">
                                Deadline: {new Date(opportunity.deadline).toLocaleDateString()}
                            </span>
                        )}
                    </div>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                    {opportunity.name}
                </h3>
                <p className="text-gray-600 mb-4 whitespace-pre-wrap">
                    {opportunity.opportunity_description}
                </p>
                {opportunity.link && (
                    <div className="mb-4">
                        <a
                            href={opportunity.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-primary-600 hover:text-primary-800 font-medium text-sm flex items-center"
                        >
                            View Details <span className="ml-1">&rarr;</span>
                        </a>
                    </div>
                )}
            </div>
            <div className="px-6 py-4 bg-gray-50 flex justify-end space-x-2">
                <Button variant="secondary" onClick={() => onEdit(opportunity)} className="flex items-center">
                    <FaEdit className="mr-1" /> Edit
                </Button>
                <Button variant="danger" onClick={() => onDelete(opportunity.id)} className="flex items-center">
                    <FaTrash className="mr-1" /> Delete
                </Button>
            </div>
        </Card>
    );
};

export default OpportunityCard;
