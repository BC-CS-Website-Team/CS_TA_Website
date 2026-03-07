/**
 * MeetTAs.jsx
 * Page component for displaying Teaching Assistants
 */

import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { ProfileCard } from '../../components/molecules'
import { TeamMemberModal } from '../../components/organisms'
import { User } from '../../types'

const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:8000'

// Helper function to get a random dog image
const getRandomDogImage = () => {
  const dogImages = ['dog.jpg', 'dog2.jpg', 'dog3.jpg', 'dog4.jpg', 'dog5.jpg', 'dog6.jpg'];
  const randomIndex = Math.floor(Math.random() * dogImages.length);
  return `/images/${dogImages[randomIndex]}`;
};

const MeetTAs: React.FC = () => {
  const [selectedMember, setSelectedMember] = useState<any | null>(null)
  const [tas, setTas] = useState<User[]>([])
  const [loading, setLoading] = useState<boolean>(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    fetchTAData()
  }, [])

  const fetchTAData = async () => {
    const controller = new AbortController()
    const timeoutId = setTimeout(() => controller.abort(), 10000)
    
    try {
      setLoading(true)
      setError(null)
      
      const response = await fetch(`${API_URL}/api/users/by-role/CS TA`, {
        signal: controller.signal
      })
      
      clearTimeout(timeoutId)
      
      if (!response.ok) {
        console.error('TA API Error:', {
          status: response.status,
          statusText: response.statusText,
          url: response.url,
          timestamp: new Date().toISOString()
        })
        throw new Error('Failed to fetch TA data')
      }
      
      const data = await response.json()
      setTas(data)
    } catch (err) {
      clearTimeout(timeoutId)
      
      if (err instanceof TypeError && err.message.includes('fetch')) {
        console.error('Network Error - Failed to fetch TAs:', err)
        setError('Unable to load TA data. Please check your connection and try again')
      } else if (err instanceof Error && err.name === 'AbortError') {
        console.error('Timeout Error - TA API request timed out:', err)
        setError('Request timed out. Please try again')
      } else {
        console.error('Error fetching TAs:', err)
        const errorMessage = err instanceof Error ? err.message : 'An error occurred while loading TA data'
        setError(errorMessage)
      }
    } finally {
      setLoading(false)
    }
  }

  const handleCardClick = (member: User) => {
    const transformedMember = {
      id: member.id.toString(),
      name: `${member.first_name || ''} ${member.last_name || ''}`.trim() || member.email,
      image: member.profile_picture 
        ? (member.profile_picture.startsWith('http') ? member.profile_picture : `${API_URL}${member.profile_picture}`)
        : getRandomDogImage(),
      email: member.email,
      role: member.roles.map(r => r.name).join(', '),
      hours: [],
      courses: [],
      links: []
    }
    setSelectedMember(transformedMember)
  }

  const transformToProfileCard = (user: User) => {
    const displayName = `${user.first_name || ''} ${user.last_name || ''}`.trim() || user.email
    const displayImage = user.profile_picture 
      ? (user.profile_picture.startsWith('http') ? user.profile_picture : `${API_URL}${user.profile_picture}`)
      : getRandomDogImage()
    const displayRole = user.roles.map(r => r.name).join(', ')
    
    return {
      name: displayName,
      image: displayImage,
      role: displayRole
    }
  }

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-[400px]">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary-600"></div>
      </div>
    )
  }

  if (error) {
    return (
      <div className="space-y-12">
        <div>
          <h1 className="text-3xl font-bold text-gray-900 mb-4">
            Meet Our TAs
          </h1>
          <p className="text-xl text-gray-600">
            Learn about the dedicated Teaching Assistants in our CS program.
          </p>
        </div>
        <div className="bg-red-50 border border-red-200 rounded-lg p-6">
          <p className="text-red-800">
            {error}. Please try refreshing the page.
          </p>
        </div>
      </div>
    )
  }

  return (
    <div className="space-y-12">
      <div>
        <h1 className="text-3xl font-bold text-gray-900 mb-4">
          Meet Our TAs
        </h1>
        <p className="text-xl text-gray-600">
          Learn about the dedicated Teaching Assistants in our CS program.
        </p>
      </div>

      {/* TAs Section */}
      <section>
        <h2 className="text-2xl font-semibold text-gray-900 mb-4">
          Our Teaching Assistants
        </h2>
        <p className="text-lg text-gray-600 mb-8">
          Click on a photo for more information about our TAs.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {tas.length === 0 ? (
            <div className="col-span-full bg-gray-50 border border-gray-200 rounded-lg p-8 text-center">
              <p className="text-gray-600">
                No TAs are currently listed. Check back later!
              </p>
            </div>
          ) : (
            tas.map((member) => (
              <ProfileCard
                key={member.id}
                {...transformToProfileCard(member)}
                onClick={() => handleCardClick(member)}
              />
            ))
          )}
        </div>
      </section>

      {/* Modal */}
      {selectedMember && (
        <TeamMemberModal
          member={selectedMember}
          onClose={() => setSelectedMember(null)}
        />
      )}

      {/* Previous Years Section */}
      <section className="mt-16 border-t pt-8">
        <h2 className="text-xl font-semibold mb-4">Previous years</h2>
        <ul>
          <li>
            <Link to="/meet-the-team/tas/previous-2024-2025" className="text-primary-600 hover:underline">
              2024-2025
            </Link>
          </li>
        </ul>
      </section>
    </div>
  )
}

export default MeetTAs
