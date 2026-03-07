/**
 * ProfileCard.jsx
 * Generic card component for displaying user profile information.
 * Replaces FacultyCard, MemberCard, and TeamMemberCard.
 */

import Image from '../atoms/Image';
import Heading from '../atoms/Heading';
import Text from '../atoms/Text';

export interface ProfileCardProps {
    image: string;
    name: string;
    role?: string;
    onClick?: () => void;
    variant?: 'default' | 'round';
    className?: string;
}

const ProfileCard: React.FC<ProfileCardProps> = ({ image, name, role, onClick, variant = 'default', className = '' }) => {
    const isRound = variant === 'round'

    return (
        <div
            className={`
        group cursor-pointer bg-white rounded-lg shadow-md overflow-hidden 
        transform transition-all duration-300 hover:scale-105 hover:shadow-xl
        ${isRound ? 'flex flex-col items-center p-4 border border-gray-200' : ''}
        ${className}
      `}
            onClick={onClick}
        >
            <div className={`
        overflow-hidden relative
        ${isRound ? 'w-[150px] h-[150px] rounded-full border border-gray-200 mb-4' : 'aspect-square w-full'}
      `}>
                <Image
                    src={image}
                    alt={name}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                />
            </div>
            <div className={`w-full ${isRound ? 'text-center p-0' : 'p-4 text-center'}`}>
                <Heading level={3} className="text-lg text-gray-900 group-hover:text-primary-600">
                    {name}
                </Heading>
                {role && (
                    <Text className="text-sm mt-1">
                        {role}
                    </Text>
                )}
            </div>
        </div>
    )
}

export default ProfileCard
