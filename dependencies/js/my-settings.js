$(document).ready(function() {
    setInElement('#nome', 'Rafael Lopes da Silva');
    setInElement('#nivel', 'Desenvolvedor Full Stack | Sênior');
    setInElement('#telefone', '(047) 9 9998-2143');
    setInElement('#idade', diffAnos(1997, 8, 13));
    setInElement('#experiencia', diffAnos(2016, 1, 1));
    setInElement('#email', 'rafaellopes1025@gmail.com');
    setInElement('#freelance', 'Disponível');
    setInElement('#anosExperiencia', diffAnos(2016, 1, 1));
    setInElement('#trabalhandoEm', "Microton");
    setInElement('#projetosRealizados', 21);
    setMySkills([
        {nome: 'PHP', percentual: 95},
        {nome: 'HTML', percentual: 80},
        {nome: 'JavaScript', percentual: 85},
        {nome: 'CSS', percentual: 70},
        {nome: 'SEO', percentual: 85},
        {nome: 'GitHub', percentual: 80},
        {nome: 'OpenCart', percentual: 80},
        {nome: 'WordPress', percentual: 75},
        {nome: 'Banco de Dados', percentual: 75},
        {nome: 'Linux', percentual: 40},
        {nome: 'Photoshop', percentual: 75},
        {nome: 'Sony Vegas', percentual: 80},
        {nome: 'Pacote Office', percentual: 85},
    ]);
});

function setInElement(selector, value){
    document.querySelector(selector).innerText = value;
}

function setMySkills(skillsInArray){
    let counter = 0
    skillsInArray.forEach(skill => {
        let bgSkill = '';
        if(counter == 0){
            bgSkill = 'bg-primary';
        }
        if(counter == 1){
            bgSkill = 'bg-danger';
        }
        if(counter == 2){
            bgSkill = 'bg-info';
        }
        if(counter == 3){
            bgSkill = 'bg-warning';
        }
        if(counter == 4){
            bgSkill = 'bg-success';
            counter = -1;
        }
        counter++;
        document.querySelector("#my-skills").insertAdjacentHTML("beforeend",
            '<div class="col-sm-6">\n' +
            '         <div class="skill mb-4">\n' +
            '             <div class="d-flex justify-content-between">\n' +
            '                 <p class="mb-2" style="text-transform: uppercase;"><b>'+skill['nome']+'</b></p>\n' +
            '                 <p class="mb-2"><b>'+skill['percentual']+'%</b></p>\n' +
            '             </div>\n' +
            '             <div class="progress">\n' +
            '                 <div class="progress-bar '+bgSkill+'" role="progressbar"\n' +
            '                      aria-valuenow="'+skill['percentual']+'" aria-valuemin="0" aria-valuemax="100" style="width: '+skill['percentual']+'%"></div>\n' +
            '             </div>\n' +
            '         </div>\n' +
            '     </div>'
        );
    });
}

function diffAnos(ano_aniversario, mes_aniversario, dia_aniversario) {
    var d = new Date,
        ano_atual = d.getFullYear(),
        mes_atual = d.getMonth() + 1,
        dia_atual = d.getDate(),

        ano_aniversario = +ano_aniversario,
        mes_aniversario = +mes_aniversario,
        dia_aniversario = +dia_aniversario,

        quantos_anos = ano_atual - ano_aniversario;

    if (mes_atual < mes_aniversario || mes_atual == mes_aniversario && dia_atual < dia_aniversario) {
        quantos_anos--;
    }

    return quantos_anos < 0 ? 0 : quantos_anos;
}