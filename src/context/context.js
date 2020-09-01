import React, { useState, useEffect } from 'react';
import mockUser from './mockData.js/mockUser';
import mockRepos from './mockData.js/mockRepos';
import mockFollowers from './mockData.js/mockFollowers';
import axios from 'axios';

const rootUrl = 'https://api.github.com';

const GithubContext = React.createContext();

const GithubProvider = ({children}) => {
	const [githubUser, setGithubUser] = useState(mockUser)
	const [repos, setRepos] = useState(mockRepos)
	const [followers, setFollowers] = useState(mockFollowers)
	
	// request loading
	const [requests, setRequests] = useState(0);
	const [isLoading, setIslaoding] = useState(false);
	// error
	const [error,setError] = useState({show:false, mgs: ""})

	const searchGihubUser = async (user) => {
		// toggleError
		toggleError()
		setIslaoding(true)

		const response = await axios(`${rootUrl}/users/${user}`)
		.catch(err => console.log(err))
		console.log(response);
		if(response){
			setGithubUser(response.data)
			//repos
			// https://api.github.com/users/john-smilga/repos?per_page=100
			// Followers
			// https://api.github.com/users/john-smilga/followers
		}else{
			toggleError(true, "there is no user with such Name")
		}
		checkRequests();
		setIslaoding(false)

	}
	// check rate
	const checkRequests = () => {
		axios(`${rootUrl}/rate_limit`)
		.then(({data}) => {
			let { rate: { remaining }, } = data // notice this destructuring format
			setRequests(remaining)
			if(remaining === 0){
				toggleError(true, "sorry, you have exceeded your hourly rate limit!")
			}
		})
		.catch((err) => {
			console.log(err);
		});
	}

	function toggleError(show = false, msg = ""){
		setError({ show, msg })
	}
	
	useEffect(checkRequests, [])
	return(
		<GithubContext.Provider value={{
			githubUser, 
			repos, 
			followers, 
			requests, 
			error, 
			searchGihubUser,
			isLoading
		}}>{children}</GithubContext.Provider>
		) 
}

export {GithubProvider, GithubContext}


 