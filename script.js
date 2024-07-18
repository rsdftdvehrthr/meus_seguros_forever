document.getElementById('insuranceForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const insuranceType = document.getElementById('insuranceType').value;

    alert(`Obrigado, ${name}! Sua solicitação de cotação para seguro de ${insuranceType} foi recebida. Entraremos em contato pelo email ${email}.`);
});
