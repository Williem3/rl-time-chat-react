import profileImage from '../../assets/Web 1366 – 3/user-icon.svg'
import classes from './Avatar.module.css';
import uploadIcon from '../../assets/Web 1366 – 3/camera-icon.svg';

const Avatar = props => {

    const avatar = localStorage.getItem('profilePicture');
    const user = localStorage.getItem('username');

    const uploadProfile = (event) => {

        const file = event.target.files[0];
        getBase64(file).then(base64 => {
            localStorage["profilePicture"] = base64;
            console.debug("file stored", base64)
        })
        sessionStorage.setItem('profilePicture', event.target.files[0]);
    }

    const getBase64 = (file) => {
        return new Promise((resolve, reject) => {
            const reader = new FileReader();
            reader.onload = () => resolve(reader.result);
            reader.onerror = error => reject(error);
            reader.readAsDataURL(file);
        })
    }

    if (!avatar || !user) {
        return (
            <div className={classes.wrapper}>
                <label htmlFor='file-input' className={classes.uploadLabel}>
                    <img src={uploadIcon} alt="selectToChange" className={classes.upload}/>
                </label>
                <input type="file" id="file-input" className={classes.fileUplaod} name="imageFile" onChange={uploadProfile}/>
                <img src={profileImage} alt="defaultProfilePicture" className={classes.profile}/> 
            </div>
        )
    } else {
        return (
            <div className={classes.wrapper}>
                <img src={avatar} alt="userSetPicture" className={classes.profilePicture}/>
            </div>
        )
        
    }
}


export default Avatar;