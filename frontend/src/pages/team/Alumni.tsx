/**
 * Alumni.tsx
 * Page component for displaying Alumni members
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

const Alumni: React.FC = () => {
  const [alumni, setAlumni] = useState<User[]>([])
  const [selectedMember, setSelectedMember] = useState<any | null>(null)
  const [loading, setLoading] = useState<boolean>(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    fetchAlumni()
  }, [])

  const fetchAlumni = async () => {
    // Create AbortController for timeout handling
    const controller = new AbortController()
    const timeoutId = setTimeout(() => controller.abort(), 10000) // 10-second timeout
    
    try {
      setLoading(true)
      setError(null)
      
      const response = await fetch(`${API_URL}/api/users/by-role/Alumni`, {
        signal: controller.signal
      })
      
      // Clear timeout if request completes successfully
      clearTimeout(timeoutId)
      
      if (!response.ok) {
        // Log server error details to console
        console.error('Alumni API Error:', {
          status: response.status,
          statusText: response.statusText,
          url: response.url,
          timestamp: new Date().toISOString()
        })
        
        // Attempt to get error details from response
        try {
          const errorData = await response.json()
          console.error('Error response body:', errorData)
        } catch {
          // Response body is not JSON, ignore
        }
        
        throw new Error('Failed to fetch alumni data')
      }
      
      const data = await response.json()
      setAlumni(data)
    } catch (err) {
      // Clear timeout on error
      clearTimeout(timeoutId)
      
      // Log detailed error information to console
      if (err instanceof TypeError && err.message.includes('fetch')) {
        // Network failure
        console.error('Network Error - Failed to fetch alumni:', {
          error: err.message,
          type: 'NetworkError',
          url: `${API_URL}/api/users/by-role/Alumni`,
          timestamp: new Date().toISOString(),
          details: 'Unable to connect to the server. Please check your internet connection.'
        })
        setError('Unable to load alumni data. Please check your connection and try again')
      } else if (err instanceof Error && err.name === 'AbortError') {
        // Timeout error
        console.error('Timeout Error - Alumni API request timed out:', {
          error: err.message,
          type: 'TimeoutError',
          url: `${API_URL}/api/users/by-role/Alumni`,
          timestamp: new Date().toISOString(),
          details: 'The request took too long to complete.'
        })
        setError('Request timed out. Please try again')
      } else {
        // Generic error
        console.error('Error fetching alumni:', {
          error: err instanceof Error ? err.message : 'Unknown error',
          type: err instanceof Error ? err.name : 'UnknownError',
          stack: err instanceof Error ? err.stack : undefined,
          timestamp: new Date().toISOString()
        })
        const errorMessage = err instanceof Error ? err.message : 'An error occurred while loading alumni data'
        setError(errorMessage)
      }
    } finally {
      setLoading(false)
    }
  }

  const handleCardClick = (member: User) => {
    // Transform User data to match TeamMemberModal expected format
    const transformedMember = {
      id: member.id.toString(),
      name: `${member.first_name || ''} ${member.last_name || ''}`.trim() || member.email,
      image: member.profile_picture 
        ? (member.profile_picture.startsWith('http') ? member.profile_picture : `${API_URL}${member.profile_picture}`)
        : getRandomDogImage(),
      email: member.email,
      role: member.roles.map(r => r.name).join(', ') || 'Alumni',
      hours: [],
      courses: [],
      links: []
    }
    setSelectedMember(transformedMember)
  }

  const handleModalClose = () => {
    setSelectedMember(null)
  }

  // Transform User data to ProfileCard props
  const transformToProfileCard = (user: User) => {
    const displayName = `${user.first_name || ''} ${user.last_name || ''}`.trim() || user.email
    const displayImage = user.profile_picture 
      ? (user.profile_picture.startsWith('http') ? user.profile_picture : `${API_URL}${user.profile_picture}`)
      : getRandomDogImage()
    const displayRole = user.roles.map(r => r.name).join(', ') || 'Alumni'
    
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
            Meet Our Alumni
          </h1>
          <p className="text-xl text-gray-600">
            Celebrating former team members who contributed to the CS department and continue to make an impact in their careers.
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
          Meet Our Alumni
        </h1>
        <p className="text-xl text-gray-600">
          Celebrating former team members who contributed to the CS department and continue to make an impact in their careers.
        </p>
      </div>

      <section>
        <h2 className="text-2xl font-semibold text-gray-900 mb-4">
          Our Alumni
        </h2>
        <p className="text-gray-600 mb-6">
          Our alumni have gone on to pursue exciting careers in technology and beyond. 
          Click on a photo to learn more about their time with us and their current endeavors.
        </p>

        {alumni.length === 0 ? (
          <div className="bg-gray-50 border border-gray-200 rounded-lg p-8 text-center">
            <p className="text-gray-600">
              No alumni are currently listed. Check back later!
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {alumni.map((member) => (
              <ProfileCard
                key={member.id}
                {...transformToProfileCard(member)}
                onClick={() => handleCardClick(member)}
              />
            ))}
          </div>
        )}
      </section>

      {/* Modal */}
      {selectedMember && (
        <TeamMemberModal
          member={selectedMember}
          onClose={handleModalClose}
        />
      )}
    </div>
  )
}

export default Alumni
