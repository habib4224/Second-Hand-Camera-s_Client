import { useEffect, useState } from 'react';

const SellerHook = email => {
    const [isSeller, setIsSeller] = useState(false);
    useEffect(() => {
        if (email) {
            fetch(`https://reselling-your-camera-server.vercel.app/users/seller/${email}`)
                .then(res => res.json())
                .then(data => {
                    setIsSeller(data.isSeller);
                })
        }
    }, [email])
    return [isSeller]
}

export default SellerHook;