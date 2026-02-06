export async function fetchOrgs(userID) {
    console.log('Fetching Orgs');
    const res = await fetch(`/api/users/${userID}/memberships`, {method: 'GET'});

    if(!res.ok) throw new Error('No Organizations Were Able to Be Retrieved');

    return res.json();
}

export async function fetchCurrentUser() {
    const res = await fetch('/api/auth/me', { method: 'GET' });
    if(res.status === 401) return null;

    if(!res.ok) throw new Error('Failed to Fetch User');

    return res.json();
}

export async function fetchTeamMembers(orgID) {
    const res = await fetch(`/api/orgs/${orgID}/memberships`);

    if(!res.ok) throw new Error('Failed to Fetch Members');

    return res.json();
}