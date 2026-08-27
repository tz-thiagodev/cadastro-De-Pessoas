const listaCadastro = []

    function cadastro() { 
        //=====VARIÁVEIS=====

        const res = document.getElementById('resCadastro')

        let nome = document.getElementById('nomeUsuario').value

        let idade = Number(document.getElementById('idadeUsuario').value)

        //=====PROCESSO=====

        if (nome === '' || idade == 0) {
            alert('[ERRO] Um (ou dois) dos campos não está preenchido.\n\nPor favor, preencha.')
        } else {
            listaCadastro.push({nome: nome, idade: idade})

        res.innerHTML += `<p>O usuário ${nome}, de ${idade} anos de idade foi adicionado(a).</p>`
        }

        listaCadastro.sort((a, b) => {
            return a.idade - b.idade
        })

        res.innerHTML += `<p><strong>O usuário ${listaCadastro[0].nome} tem a menor idade com ${listaCadastro[0].idade} anos.</strong></p>`

        res.innerHTML += `<p><strong>O usuário ${listaCadastro[listaCadastro.length - 1].nome} tem a maior idade com ${listaCadastro[listaCadastro.length - 1].idade} anos.</strong></p>`

        res.innerHTML += `<p><strong>Existem ${listaCadastro.length} usuários cadastrados.</strong></p><br><hr>`

        document.getElementById('nomeUsuario').value = ''
        document.getElementById('idadeUsuario').value = ''

    }