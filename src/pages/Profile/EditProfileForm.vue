<template>
  <card>
    <h5 slot="header" class="title">Dados do usuário</h5>
    <div class="row">
      <div class="col-md-6 pr-md-1">
        <base-input label      ="CPF"
                    placeholder="CPF"
                    v-model    ="model.cpf">
        </base-input>
      </div>
      <div class="col-md-3 px-md-1">
        <base-input label      ="Senha"
                    placeholder="Senha"
                    type       ="password"
                    v-model    ="model.senha">
        </base-input>
      </div>
    </div>
    <div class="row">
      <div class="col-md-6 pr-md-1">
        <base-input label      ="Nome"
                    v-model    ="model.nome"
                    placeholder="Nome">
        </base-input>
      </div>
      <div class="col-md-6 pl-md-1">
        <base-input label      ="E-mail"
                    v-model    ="model.email"
                    placeholder="E-mail">
        </base-input>
      </div>
    </div>
    <div class="row">
      <div class="col-md-6 pr-md-1">
        <div class="form-group">
          <label class="control-label">Departamento</label>
          <div>
              <select name="" id="" class="form-control">
                <option value="">Departamento 1</option>
              </select>
          </div>
        </div>
      </div>
      <div class="col-md-6 pl-md-1">
        <div class="form-group">
          <label class="control-label">Função</label>
          <div>
              <select name="" id="" class="form-control">
                <option value="">Função 1</option>
              </select>
          </div>
        </div>
      </div>

    </div>

    <base-button slot="footer" type="primary" fill>Gravar</base-button>
    <base-button slot="footer" type="primary" fill>Pesquisar</base-button>

  </card>

</template>

<script>
  export default {
    props: {
      model: {
        type: Object,
        default: () => {
          return {};
        }
      }
    }
  }

</script>
<style>
</style>
