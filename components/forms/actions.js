export const loginAction = async(formData) => {
    const res = await fetch('/api/auth/login', {
        method: "POST",
        body: formData
    });

    if(!res.ok) throw new Error('Invalid Credentials');

    return res.json();
}

export const createNoteAction = async(info) => {
    const {userID, formData} = info;
    const res = await fetch(`/api/users/${userID}/notes`, {
        method: "POST",
        body: formData
    });

    const body = await res.json();

    if(!res.ok) {
        const err = new Error(body.error?.message ?? 'Internal Server Error');
        err.status = res.status;

        throw err;
    }

    return body;
}