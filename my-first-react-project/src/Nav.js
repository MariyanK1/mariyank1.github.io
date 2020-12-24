import { Link } from 'react-router-dom';

function Nav() {
    return (
        <div>
            <Link to='/home'>
                <button>Home</button>
            </Link>

            <Link to='/names'>
                <button>Names</button>
            </Link>
            <Link to='/shop'>
                <button>Shop</button>
            </Link>

            <Link to='/curr-date'>
                <button>Current Date</button>
            </Link>
        </div>

    )
}

export default Nav;