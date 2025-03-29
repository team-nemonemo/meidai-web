import * as S from './style';
import Logo from '@/assets/logo.svg';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '@/hooks/auth/useAuth';

const Header = () => {
    const navigate = useNavigate();

    return (
        <S.Container>
            <S.HeaderWrap>
                <S.Logo onClick={() => navigate('/')}>
                    <img src={Logo} alt="로고" />
                </S.Logo>
                <S.MenuWrap>
                    <S.Menu>
                        <S.MenuItem onClick={() => navigate('/search')}>Search</S.MenuItem>
                        <S.MenuItem onClick={() => navigate('/create')}>만들기</S.MenuItem>
                        <S.MenuItem onClick={() => navigate('/login')}>로그인</S.MenuItem>
                    </S.Menu>
                </S.MenuWrap>
            </S.HeaderWrap>
        </S.Container>
    );
};

export default Header;