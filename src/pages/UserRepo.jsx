import PropTypes from 'prop-types';
import { FaEye, FaInfo, FaLink, FaStar, FaUtensils } from 'react-icons/fa';

function UserRepo({ repo }) {


    const {
        name,
        html_url,
        description,
        forks,
        open_issues,
        watchers_count,
        stargazers_count
    
    } = repo;



  return ( 
            <div className='mb-2 rounded-md card bg-gray-800 hover:bg-gray-900'>
            <div className='card-body'>
                <h3 className='mb-2 text-xl font-semibold'>
                    <a href={html_url}>
                        <FaLink className='inline mr-1'/>{name}
                    </a>
                </h3>
                <p className='mb-3'>{description}</p>    
                <div>
                   <div className='mr-2 badge badge-info bagde-lg'>
                     <FaEye className='mr-2 ' />{watchers_count}
                   </div>
                   <div className='mr-2 badge badge-info bagde-lg'>
                   <FaStar className='mr-2 ' />{stargazers_count}
                   </div>
                   <div className='mr-2 badge badge-info bagde-lg'>
                   <FaInfo className='mr-2 ' />{open_issues}
                   </div>
                   <div className='mr-2 badge badge-info bagde-lg'>
                   <FaUtensils className='mr-2 ' />{forks}
                   </div>     
                </div>    
            </div>

        </div>
    
  )
}


UserRepo.propTypes = {
    repo: PropTypes.array.isRequired,
}

export default UserRepo;
