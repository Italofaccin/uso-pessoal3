import React, { useState } from "react";

function CadastroEvento() {
  const [nome, setNome] = useState("");
  const [data, setData] = useState("");
  const [imagem, setImagem] = useState("");
  const [descricao, setDescricao] = useState("");
  const [mensagem, setMensagem] = useState("");

  function cadastrarEvento(e) {
    e.preventDefault();

    if (!nome || !data || !imagem || !descricao) {
      setMensagem(" Preencha todos os campos!");
      return;
    }

    setMensagem(" Evento cadastrado com sucesso!");

    // Aqui você pode enviar para API, salvar em estado global, etc.
    console.log("Evento cadastrado:", {
      nome,
      data,
      imagem,
      descricao,
    });

    // Limpar campos
    setNome("");
    setData("");
    setImagem("");
    setDescricao("");
  }

  return (
    <main>
      <h1>Cadastro de Evento</h1>

      <form className="card-evento" onSubmit={cadastrarEvento}>
        <input
          type="text"
          placeholder="Nome do Evento"
          value={nome}
          onChange={(e) => setNome(e.target.value)}
          className="campo-input"
        />

        <input
          type="date"
          value={data}
          onChange={(e) => setData(e.target.value)}
          className="campo-input"
        />

        <input
          type="text"
          placeholder="URL da Imagem"
          value={imagem}
          onChange={(e) => setImagem(e.target.value)}
          className="campo-input"
        />

        <textarea
          placeholder="Descrição do Evento"
          value={descricao}
          onChange={(e) => setDescricao(e.target.value)}
          className="campo-input"
          rows="4"
        ></textarea>

        <button type="submit">Cadastrar</button>

        {mensagem && <p style={{ marginTop: "10px" }}>{mensagem}</p>}
      </form>
    </main>
  );
}

export default CadastroEvento;
