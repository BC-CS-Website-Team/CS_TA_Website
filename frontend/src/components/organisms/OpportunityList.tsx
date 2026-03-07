import React from 'react';
import OpportunityCard, { Opportunity } from '../molecules/OpportunityCard';

export interface OpportunityListProps {
    opportunities: Opportunity[];
    onEdit: (opportunity: Opportunity) => void;
    onDelete: (id: string) => void;
}

const OpportunityList: React.FC<OpportunityListProps> = ({ opportunities, onEdit, onDelete }) => {
    if (!opportunities || opportunities.length === 0) {
        return (
            <div className="text-center py-12 bg-gray-50 rounded-lg">
                <h3 className="mt-2 text-sm font-medium text-gray-900">No opportunities</h3>
                <p className="mt-1 text-sm text-gray-500">Get started by creating a new opportunity.</p>
            </div>
        );
    }

    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {opportunities.map((opp) => (
                <OpportunityCard
                    key={opp.id}
                    opportunity={opp}
                    onEdit={onEdit}
                    onDelete={onDelete}
                />
            ))}
        </div>
    );
};

export default OpportunityList;
