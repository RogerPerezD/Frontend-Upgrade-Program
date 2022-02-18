import { useSelector } from 'react-redux';
import { RootState } from '../../store/store';

export const Navbar = () => {
    const { user } = useSelector((state: RootState)=> state.auth);
    return (
        <div className='navbar navbar-dark bg-dark mb-4'>
            <span className='navbar-brand'>
                {user?.name}
            </span>

            <button className='btn btn-outline-danger'>
                <i className="fas fa-sign-out-alt"></i>
                <span> Salir</span>
            </button>

        </div>
    );
}
