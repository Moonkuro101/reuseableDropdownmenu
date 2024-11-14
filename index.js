class Dropdown {
    constructor() {
      $(document).ready(() => {
        this.dropdowns = $(".dropdown .dropdown-menu");
        if (this.dropdowns.length) {
          this.initialize();
        }
      });
    }
  
    initialize() {
      // Listen for mouseenter event on dropdown actions
      $(".dropdown-action").on("mouseenter", (e) => {
        console.log(e.target)
        this.handleDropdownHover($(e.target));
      });
  
      // Listen for mouseleave event to hide dropdown when cursor leaves the dropdown
      $(".dropdown").on("mouseleave", () => {
        this.hideAllDropdowns();
      });
    }
  
    handleDropdownHover(dropdownAction) {
      const dropdownMenu = dropdownAction.next(".dropdown-menu");
      console.log(dropdownMenu)
  
      // Close all other dropdowns first
      this.hideAllDropdowns();
  
      // Show the dropdown menu when hovering over the action
      if (dropdownMenu.length) {
        dropdownMenu.addClass("active");
      }
    }
  
    hideAllDropdowns() {
      this.dropdowns.removeClass("active");
    }
  }
  
  $(document).ready(() => new Dropdown());
  