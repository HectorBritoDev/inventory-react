export const closeLoginModal = () => {
    // console.log(this.props);
    const login_modal = document.querySelector('.login-modal');
    const backdrop = document.querySelector('.backdrop');
    login_modal.classList.remove('show');
    backdrop.classList.remove('show');
}
export const showLoginModal = () => {
    const login_modal = document.querySelector('.login-modal');
    const backdrop = document.querySelector('.backdrop');
    login_modal.classList.add('show');
    backdrop.classList.add('show');
    document.querySelector('#login-email').focus();
}
