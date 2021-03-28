<template>
  <div>
    <div class="content-body">
      <b-row>
        <b-col sm="12" md="12" lg="12" xl="6">
          <b-card bg-variant="white" style="height:740px;">
            <b-card-header style="background">
              <h3>Match Schedule</h3>
            </b-card-header>
            <b-card-body>
              <div class='right button-margin'>
                <b-button variant="outline-primary">Regist</b-button>
                <b-button variant="outline-warning">Update</b-button>
                <b-button variant="outline-danger">Delete</b-button>
              </div>
              <b-table
                :stickyHeader="stickyHeader"
                responsive
                :striped="striped"
                :bordered="bordered"
                :borderless="borderless"
                :outlined="outlined"
                :small="small"
                :hover="hover"
                :dark="dark"
                :fixed="fixed"
                :foot-clone="footClone"
                :no-border-collapse="noCollapse"
                :items="items"
                :fields="fields"
                :head-variant="headVariant"
                :table-variant="tableVariant"
                stacked="md"
                style="height:580px; overflow-x: auto; overflow-y: auto;"
              >
                <template #head()="scope">
                  <div class='center'>
                    {{scope.label}}
                  </div>
                </template>
                <template #cell()="scope">
                  <div class='center'>
                    {{ scope.value }}
                  </div>
                </template>
                <template #cell(index)="scope">
                  <div class='center'>
                    {{ scope.index + 1 }}
                  </div>
                </template>
                <template #cell(otherTeamNm)="scope">
                  <div class='center'>
                    VS {{ scope.item.otherTeamNm }}
                  </div>
                </template>
              </b-table>
            </b-card-body>
          </b-card>
        </b-col>
        <b-col cols="6" >
          <b-card bg-variant="white" style="height:740px;">
            <b-card-header style="background">
              <h3>Match Result</h3>
            </b-card-header>
            <b-card-body>

            </b-card-body>
          </b-card>
        </b-col>
      </b-row>
    </div>
  </div>
</template>
<script>
export default {
  data () {
    return {
      fields: [
        { key: 'index', label: '', sortable: false },
        { key: 'teamNm', label: '팀명', sortable: true },
        { key: 'otherTeamNm', label: '상대팀명', sortable: true },
        { key: 'mcDtti', label: '일시', sortable: true },
        { key: 'mcStdm', label: '장소', sortable: true }
      ],
      items: [
        { teamNm: 'FC.바론', otherTeamNm: 'FC.나그네', mcDtti: '2021/02/12 14:00', mcStdm: '광명복지관운동장' }
      ],
      stickyHeader: true,
      striped: false,
      bordered: false,
      borderless: false,
      outlined: false,
      small: false,
      hover: true,
      dark: false,
      fixed: false,
      footClone: false,
      headVariant: 'dark',
      tableVariant: '',
      noCollapse: false
    }
  }
}
</script>

<style scoped lang="scss">
@import "~/webapp/WEB-INF/views//scss/style"
</style>
