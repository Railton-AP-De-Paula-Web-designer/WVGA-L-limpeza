document.addEventListener('DOMContentLoaded', () => {
    const form = document.querySelector('form');

    if (!form) return; // Segurança: só executa se o formulário existir na página

    form.addEventListener('submit', (e) => {
        e.preventDefault();

        // Correção de seletores e propriedades
        const nome = form.querySelector('input[type="text"]').value;
        const whatsapp = form.querySelector('input[type="tel"]').value;
        const servico = form.querySelector('select').value;
        const detalhes = form.querySelector('textarea').value;

       
        const numeroEmpresa = "5516997276999";

        // Montagem da mensagem profissional com formatação WhatsApp
        const mensagem = encodeURIComponent(
            `*Nova Consultoria Técnica - WVGA*\n\n` +
            `*Nome:* ${nome}\n` +
            `*WhatsApp:* ${whatsapp}\n` +
            `*Serviço:* ${servico}\n` +
            `*Detalhes:* ${detalhes}`
        );

       
        const url = `https://api.whatsapp.com/send?phone=${numeroEmpresa}&text=${mensagem}`;

        // Abre em nova aba
        window.open(url, '_blank');
    });
});