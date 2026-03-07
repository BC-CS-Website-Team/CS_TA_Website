/**
 * MeetMakerspace.jsx
 * Page component for displaying Makerspace TAs
 */

import React, { useState, useEffect } from 'react'
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

const MeetMakerspace: React.FC = () => {
  const [selectedMember, setSelectedMember] = useState<any | null>(null)
  const [makerspaceTeam, setMakerspaceTeam] = useState<User[]>([])
  const [loading, setLoading] = useState<boolean>(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    fetchMakerspaceTeam()
  }, [])

  const fetchMakerspaceTeam = async () => {
    const controller = new AbortController()
    const timeoutId = setTimeout(() => controller.abort(), 10000)
    
    try {
      setLoading(true)
      setError(null)
      
      const response = await fetch(`${API_URL}/api/users/by-role/Makerspace TA`, {
        signal: controller.signal
      })
      
      clearTimeout(timeoutId)
      
      if (!response.ok) {
        console.error('Makerspace API Error:', {
          status: response.status,
          statusText: response.statusText,
          url: response.url,
          timestamp: new Date().toISOString()
        })
        throw new Error('Failed to fetch makerspace team data')
      }
      
      const data = await response.json()
      setMakerspaceTeam(data)
    } catch (err) {
      clearTimeout(timeoutId)
      
      if (err instanceof TypeError && err.message.includes('fetch')) {
        console.error('Network Error - Failed to fetch makerspace team:', err)
        setError('Unable to load makerspace team data. Please check your connection and try again')
      } else if (err instanceof Error && err.name === 'AbortError') {
        console.error('Timeout Error - Makerspace API request timed out:', err)
        setError('Request timed out. Please try again')
      } else {
        console.error('Error fetching makerspace team:', err)
        const errorMessage = err instanceof Error ? err.message : 'An error occurred while loading makerspace team data'
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
      role: member.roles.map(r => r.name).join(', ') || 'Makerspace',
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
    const displayRole = user.roles.map(r => r.name).join(', ') || 'Makerspace'
    
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
      <div className="space-y-8">
        <div>
          <h1 className="text-3xl font-bold text-gray-900 mb-4">
            Meet Our Makerspace TAs
          </h1>
          <p className="text-gray-600">
            Get to know our skilled Makerspace Teaching Assistants who help bring your creative ideas to life.
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
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold text-gray-900 mb-4">
          Meet Our Makerspace TAs
        </h1>
        <p className="text-gray-600">
          Get to know our skilled Makerspace Teaching Assistants who help bring your creative ideas to life.
        </p>
      </div>

      <section>
        <h2 className="text-2xl font-semibold text-gray-900 mb-4">
          Our Makerspace TAs
        </h2>
        <p className="text-gray-600 mb-6">
          Our Makerspace TAs are dedicated to helping students explore and create using various
          technologies. From 3D printing to electronics, our team provides guidance and support
          for all kinds of maker projects.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {makerspaceTeam.length === 0 ? (
            <div className="col-span-full bg-gray-50 border border-gray-200 rounded-lg p-8 text-center">
              <p className="text-gray-600">
                No makerspace team members are currently listed. Check back later!
              </p>
            </div>
          ) : (
            makerspaceTeam.map((member) => (
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
    </div>
  )
}

export default MeetMakerspace
