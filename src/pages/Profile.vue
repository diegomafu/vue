<template>
  <div class="row">
    <div class="col-md-8">
      <edit-profile-form :model="model">
      </edit-profile-form>
    </div>
    
    <div class="col-md-4">
      <user-card :user="user"></user-card>
    </div>

    <div class="col-md-12">

      <div class="card" card-body-classes="table-full-width">

        <div class="card-header">
            <h4 class="card-title">Lista de usuários</h4>
        </div>

        <div class="card-body">

          <table class="table table-bordered el-table__header">
            <thead class="thead-light">
              <tr class="has-gutter">
                <th scope="col" class="is-leaf">Nome</th>
                <th scope="col" class="is-leaf" colspan="2" style="text-align:center">Ações</th>
              </tr>
            </thead>

            <tbody>
                <tr>
                  <td>Rodrigo Silva</td>
                  <td style="text-align:center">
                    <span class="tim-icons icon-pencil"/>
                  </td>
                  <td style="text-align:center">
                    <span class="tim-icons icon-simple-remove"/>
                  </td>
                </tr>

                <tr>
                  <td>Rodrigo Silva 2</td>
                  <td style="text-align:center">
                    <span class="tim-icons icon-pencil"/>
                  </td>
                  <td style="text-align:center">
                    <span class="tim-icons icon-simple-remove"/>
                  </td>
                </tr>

                <tr>
                  <td>Rodrigo Silva</td>
                  <td style="text-align:center">
                    <span class="tim-icons icon-pencil"/>
                  </td>
                  <td style="text-align:center">
                    <span class="tim-icons icon-simple-remove"/>
                  </td>
                </tr>

                <tr>
                  <td>Rodrigo Silva 2</td>
                  <td style="text-align:center">
                    <span class="tim-icons icon-pencil"/>
                  </td>
                  <td style="text-align:center">
                    <span class="tim-icons icon-simple-remove"/>
                  </td>
                </tr>
            </tbody> 

          </table>

        </div>

      </div>

    </div>

  </div>

</template>
<script>
  import EditProfileForm from './Profile/EditProfileForm';
  import UserCard from './Profile/UserCard';
  
  export default {
    components: {
      EditProfileForm,
      UserCard
    },
    data() {
      return {
        model: {
          cpf      : '',
          senha    : '',
          email    : ''
        },
        user: {
          nomeCompleto : 'Rodrigo Bolota',
          funcao       : 'Analista de sistemas',
          descricao    : 'Menino mais lindo da Retaguarda',
        }
      }
    }
  }
</script>
<style>
</style>
