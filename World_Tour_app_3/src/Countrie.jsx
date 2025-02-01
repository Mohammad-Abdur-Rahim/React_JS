import './Country.css';
const Countrie = ({countrie}) => {
    // console.log(countrie);
    const {name,flags} = countrie;

    return (
        <div className='country'>
            <h1>{name.common} </h1>
            <img src={flags.png} alt="" />
        </div>
    );
};

export default Countrie;