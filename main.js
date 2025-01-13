document.addEventListener('DOMContentLoaded', () => {
    // Kirish formasi funksiyasi
    const form = document.getElementById('login-form');
    const usernameInput = document.getElementById('input');
    const passwordInput = document.getElementById('password');
    const submitButton = document.getElementById('submit-btn');
    const togglePassword = document.getElementById('togglePassword');

    function check() {
        const username = usernameInput.value.trim();
        const password = passwordInput.value.trim();
        submitButton.disabled = !(username && password);
    }

    usernameInput.addEventListener('input', check);
    passwordInput.addEventListener('input', check);

    togglePassword.addEventListener('click', () => {
        if (passwordInput.type === 'password') {
            passwordInput.type = 'text';
            togglePassword.textContent = '🙈';
        } else {
            passwordInput.type = 'password';
            togglePassword.textContent = '👁';
        }
    });

    form.addEventListener('submit', (event) => {
        event.preventDefault(); 
        const username = usernameInput.value.trim();
        const password = passwordInput.value.trim();
        
        if (username && password) {
            // localStorage ga saqlash
            localStorage.setItem('username', username);
            localStorage.setItem('password', password);
            
            // Keyingi sahifaga o'tish
            window.location.href = 'nextpage.html'; 
        } else {
            alert('Iltimos, barcha maydonlarni to\'ldiring');
        }
    });

    // Chiqish funksiyasi
    const logoutButton = document.getElementById('logout-btn');
    if (logoutButton) {
        logoutButton.addEventListener('click', () => {
            // localStorage ni tozalash
            localStorage.removeItem('username');
            localStorage.removeItem('password');

            // Bosh sahifaga o'tish
            window.location.href = 'index.html'; // Agar bosh sahifa nomi boshqa bo'lsa, o'zgartiring
        });
    }
});
