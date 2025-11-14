// === Arquivos incluídos neste documento ===
// 1) src/components/Login.jsx
// 2) src/components/Login.css
// Salve os arquivos conforme os caminhos acima. Coloque a imagem em: src/assets/banner-senai.jpg

/* ================================
   1) src/components/Login.jsx
   Componente React exportado por padrão
   ================================ */

   import React, { useState } from 'react';
   import "./componentes/CssDaTelaDeLogin.css";
      import banner from '../assets/banner-senai.jpg'; // ajuste o caminho se necessário

   export default function Login() {
     const [email, setEmail] = useState('');
     const [password, setPassword] = useState('');
     const [remember, setRemember] = useState(false);
     const [error, setError] = useState('');
   
     function handleSubmit(e) {
       e.preventDefault();
       setError('');
       if (!email) return setError('Por favor, informe o e-mail.');
       if (!password) return setError('Por favor, informe a senha.');
   
       // Simulação de login — substitua pela sua lógica
       console.log({ email, password, remember });
       alert('Login realizado (simulado) — veja console.');
     }
   
     return (
       <div className="login-app">
         <header className="login-header">
           <div className="login-header-inner">
             <h1>SENAI - Acesso</h1>
             <nav className="menu-principal">
               <a href="#">Início</a>
               <a href="#">Cursos</a>
               <a href="#">Contato</a>
             </nav>
           </div>
         </header>
   
         <div className="banner-container">
           <div
             className="banner-senai"
             style={{ backgroundImage: `url(${banner})` }}
             aria-hidden
           />
         </div>
   
         <main className="login-main">
           <div className="login-card">
             <h2>Entrar na sua conta</h2>
   
             <form onSubmit={handleSubmit} className="login-form">
               {error && <div className="form-error">{error}</div>}
   
               <label className="field">
                 <span>E-mail</span>
                 <input
                   type="email"
                   value={email}
                   onChange={(e) => setEmail(e.target.value)}
                   placeholder="seu@exemplo.com"
                   required
                 />
               </label>
   
               <label className="field">
                 <span>Senha</span>
                 <input
                   type="password"
                   value={password}
                   onChange={(e) => setPassword(e.target.value)}
                   placeholder="••••••••"
                   required
                 />
               </label>
   
               <label className="checkbox-field">
                 <input
                   type="checkbox"
                   checked={remember}
                   onChange={(e) => setRemember(e.target.checked)}
                 />
                 <span>Lembrar-me</span>
               </label>
   
               <button type="submit" className="btn btn-primary">Entrar</button>
   
               <div className="login-links">
                 <a href="#">Esqueci a senha</a>
                 <a href="#">Criar conta</a>
               </div>
             </form>
           </div>
   
           <aside className="login-aside">
             <div className="info-card">
               <h3>Bem-vindo ao SENAI</h3>
               <p>Plataforma de aprendizado prático em tecnologia e indústria — acesse sua conta para acompanhar cursos e eventos.</p>
               <button className="btn">Ver cursos</button>
             </div>
           </aside>
         </main>
   
         <footer className="login-footer">
           <p>Meu site em React - Técnico em Desenvolvimento de Sistemas - {new Date().getFullYear()}</p>
         </footer>
       </div>
     );
   }
   