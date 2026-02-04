export const loginAction = async(formData) => {
    const res = await fetch('/api/auth/login', {
        method: "POST",
        body: formData
    });

    if(!res.ok) throw new Error('Invalid Credentials');

    return res.json();
}