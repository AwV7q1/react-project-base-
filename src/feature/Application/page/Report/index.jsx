import {Button} from "antd";
import {useRecoilState} from "recoil";
import {authenticationData} from '@/recoil/atom/authentication.js'

const Report = () => {

    const [, setAuthenticationData] = useRecoilState(authenticationData)

    const handleLogout = () => {
        setAuthenticationData({
            expiryDate: 0,
            password: '',
            refreshToken: '',
            role: '',
            token: 'notAuthenticated',
            userName: '',
        })
    }

    return (
        <div>
            report
            <div>
                <Button type={'primary'} onClick={handleLogout}>Logout</Button>
            </div>
        </div>
    );
};

export default Report;