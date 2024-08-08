document.getElementById('changePasswordBtn').addEventListener('click', function() {
    const currentPassword = document.getElementById('currentPassword').value;
    const newPassword = document.getElementById('newPassword').value;
    const confirmPassword = document.getElementById('confirmPassword').value;

    // Validate input and perform password change logic (you'll need to implement this)
    if (newPassword === confirmPassword) {
        // Update password (placeholder)
        console.log('Password changed successfully!');
    } else {
        console.error('New passwords do not match.');
    }
});

 const wrapper = document.querySelector('.wrapper2')
 const  ebooklink= document.querySelector('.EBook-link')
 const  videolink= document.querySelector('.video-link')
 const  openlink= document.querySelector('.open-link')
 const  settinglink= document.querySelector('.setting-link')
 const  logoutlink= document.querySelector('.logout-link')
 ebooklink.addEventListener('click', ()=> {
    wrapper.classList.add('active');
 });

 videolink.addEventListener('click', ()=> {
    wrapper.classList.remove('active');
 });
 openlink.addEventListener('click', ()=> {
    wrapper.classList.remove('active');
 });
settinglink.addEventListener('click', ()=> {
    wrapper.classList.remove('active');
 });
 
 
 