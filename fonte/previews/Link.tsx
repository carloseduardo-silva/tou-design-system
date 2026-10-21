import { T, Themes, Matrix, H, mount } from './_doc';
const { Link } = T;

mount(
  <Themes>
    {() => (
      <>
        <H>Estados</H>
        <Matrix
          cols={['Padrão', 'Hover', 'Foco (teclado)', 'Desabilitado']}
          first={96}
          rows={[
            { label: 'Inline', cells: [<Link href="#">Ver histórico</Link>, <Link href="#" className="is-hover">Ver histórico</Link>, <Link href="#" className="is-focus">Ver histórico</Link>, <Link disabled>Ver histórico</Link>] },
            { label: 'Solto', cells: [<Link standalone href="#">Ver todos os contatos</Link>, <Link standalone href="#" className="is-hover">Ver todos os contatos</Link>, <Link standalone href="#" className="is-focus">Ver todos os contatos</Link>, <Link standalone disabled>Ver todos os contatos</Link>] },
          ]}
        />
        <H>No texto e externo</H>
        <p style={{ margin: 0, maxWidth: 560 }}>O template precisa seguir a <Link href="#" external>política de mensagens do WhatsApp</Link>. Depois de aprovado, ele aparece em <Link href="#">Mensagens em massa</Link>.</p>
      </>
    )}
  </Themes>,
);
