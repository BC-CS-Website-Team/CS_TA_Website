import requests
import sys

API_URL = "http://localhost:8000"

def check_profile():
    # Login again to get a fresh token for the test user
    # We'll need a known user. I'll use one of the ones created by the previous script if possible,
    # or just create a new one.
    email = "test_image_profile@example.com" # New distinct email
    password = "Password123!"

    print(f"Registering/Logging in as {email}")
    try:
        requests.post(f"{API_URL}/auth/register", json={
            "email": email,
            "password": password,
            "first_name": "Profile",
            "last_name": "Tester"
        })
    except:
        pass # Ignore if exists

    response = requests.post(f"{API_URL}/auth/token", data={
        "username": email,
        "password": password
    })
    
    if response.status_code != 200:
        print("Login failed")
        return

    token = response.json()["access_token"]
    headers = {"Authorization": f"Bearer {token}"}

    # Upload a picture
    files = {'file': ('profile.txt', b'fake profile pic', 'image/png')}
    print("Uploading profile picture...")
    response = requests.post(f"{API_URL}/auth/me/profile-picture", headers=headers, files=files)
    if response.status_code != 200:
        print("Upload failed:", response.text)
        return
    
    user_data = response.json()
    print(f"Upload response profile_picture: {user_data.get('profile_picture')}")

    # Check /auth/me
    print("Checking /auth/me...")
    response = requests.get(f"{API_URL}/auth/me", headers=headers)
    me_data = response.json()
    print(f"/auth/me profile_picture: {me_data.get('profile_picture')}")

if __name__ == "__main__":
    check_profile()
