function login() {
  const user = document.getElementById('username').value.trim()
  const pass = document.getElementById('password').value.trim()
  
  if (!user || !pass) {
    Swal.fire({
      icon: 'error',
      title: 'Gagal!',
      text: 'Username dan Password wajib diisi!',
      background: '#1f1f2f',
      color: '#fff',
      confirmButtonColor: '#00fff7'
    })
    return
  }
  
  if (user === 'kenz' && pass === 'dev') {
    Swal.fire({
      icon: 'success',
      title: 'Login Berhasil!',
      background: '#1f1f2f',
      color: '#00fff7',
      showConfirmButton: false,
      timer: 1500
    }).then(() => {
      window.location.href = '/dashboard.html'
    })
  } else {
    Swal.fire({
      icon: 'error',
      title: 'Login Gagal!',
      text: 'Username atau password salah!',
      background: '#1f1f2f',
      color: '#fff',
      confirmButtonColor: '#00fff7'
    })
  }
}