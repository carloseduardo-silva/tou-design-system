import { T, Themes, H, mount } from './_doc';
const { TextField, Textarea, Icon } = T;
const noop = () => {};

mount(
  <Themes>
    {() => (
      <>
        <H>Estados</H>
        <div className="doc-grid4">
          <TextField label="Nome" required placeholder="Ex.: Mariana Couto" help="Como aparece na lista e no chat." />
          <TextField label="Nome" required value="Mariana Couto" onChange={noop} help="Preenchido" />
          <TextField label="Nome" required value="Mariana Couto" onChange={noop} controlClassName="is-hover" help="Hover" />
          <TextField label="Nome" required value="Mariana Cou" onChange={noop} controlClassName="is-focus" help="Foco: borda e anel na primária" />
          <TextField label="E-mail" value="mariana.couto@" onChange={noop} error="Digite um e-mail completo, como nome@empresa.com." />
          <TextField label="E-mail" value="mariana.couto@" onChange={noop} error="Digite um e-mail completo, como nome@empresa.com." controlClassName="is-focus" />
          <TextField label="ID do contato" value="#1118909" onChange={noop} disabled help="Gerado automaticamente." />
          <TextField label="Origem" value="Formulário do site" onChange={noop} readOnly help="Somente leitura." />
        </div>
        <H>Com ícone, prefixo, seletor de país, limpar e contador</H>
        <div className="doc-grid3">
          <TextField label="Número do WhatsApp" required addonStart={<><span className="tou-mono">BR +55</span><Icon name="chevron-down" size={14} /></>} placeholder="(13) 99999-9999" inputMode="tel" />
          <TextField label="Valor do negócio" optional prefix="R$" placeholder="0,00" inputMode="decimal" />
          <TextField label="E-mail" optional icon="mail" type="email" placeholder="nome@empresa.com" />
          <TextField label="Buscar contato" icon="search" value="Mariana" onChange={noop} onClear={noop} />
          <TextField label="Nome do template" value="boas_vindas_clinica" onChange={noop} maxLength={40} help="Só letras minúsculas, números e _." />
          <TextField label="Prazo de retorno" suffix="dias" value="7" onChange={noop} inputMode="numeric" />
        </div>
        <H>Tamanho pequeno (32px, filtros e tabelas)</H>
        <div className="doc-grid3">
          <TextField label="Telefone" size="sm" icon="phone" placeholder="(13) 99999-9999" />
          <TextField label="Telefone" size="sm" icon="phone" value="(13) 9970" onChange={noop} error="Número incompleto." />
        </div>
        <H>Textarea</H>
        <div className="doc-grid3">
          <Textarea label="Observações" optional placeholder="Ex.: prefere contato à tarde." help="Visível para toda a equipe." />
          <Textarea label="Mensagem de boas-vindas" required value="Olá! Que bom ter você por aqui. Em que podemos ajudar hoje?" onChange={noop} maxLength={60} error="Use no máximo 60 caracteres." />
          <Textarea label="Motivo da perda" disabled value="Escolheu outro fornecedor." onChange={noop} />
        </div>
      </>
    )}
  </Themes>,
);
