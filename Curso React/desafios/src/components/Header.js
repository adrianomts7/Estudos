export default function Header({moodCadastrarOuAtualizarFatura}) {
  return (
    <header>
      <h1 className="titulo">Gerador de Fatura</h1>
      <button className="btn-abrir-modal" onClick={() => moodCadastrarOuAtualizarFatura('cadastrar', true)}>Cadastrar Nova Fatura</button>
    </header>
  );

}