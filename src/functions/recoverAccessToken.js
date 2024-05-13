async function recoverAccessToken(profile, setProfile) {
  try {
    const response = await fetch(
      `${import.meta.env.VITE_API_BASE}/users/api/access_token_recovery/`,
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          refresh_token: profile.refresh_token,
        }),
      },
    );

    const data = await response.json();
    if (data.access_token) {
      setProfile(data);
      return '/dashboard';
    } else {
      setProfile(null);
      return '/auth';
    }
  } catch (error) {
    console.error('Error fetching data:', error);
  }
}
export default recoverAccessToken;
