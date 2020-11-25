enum Environments {
    local_environment = "local",
    dev_environment = "dev",
    prod_environment = "prod",
    test_environment = "test",
}

class Environment {
    private environment: String;
  
    constructor(environment: String) {
      this.environment = environment;
    }
  
    getPort(): Number {
      if (this.environment === Environments.prod_environment) {
        return 8081;
      } else if (this.environment === Environments.dev_environment) {
        return 8082;
      } else if (this.environment === Environments.test_environment) {
        return 8083;
      } else {
        return 3000;
      }
    }
  
    getDBName(): String {
      if (this.environment === Environments.prod_environment) {
        return "db_prod";
      } else if (this.environment === Environments.dev_environment) {
        return "db_dev";
      } else if (this.environment === Environments.test_environment) {
        return "db_test";
      } else {
        return "db_local";
      }
    }
  }
  
  export default new Environment(Environments.local_environment);
  