import profile from '../assets/profile.png'

const Header = () => {
    return (
        <div className="text-4xl flex justify-between items-center p-4 mx-4 border-b-1">
            <h2>Knowledge Cafe </h2>
            <img src={profile} alt="" />
        </div>
    );
};

export default Header;