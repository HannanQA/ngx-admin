///<reference types="cypress" />

describe("Our first suit", () => {
  it("first test", () => {
    cy.visit("/");
    cy.contains("Forms").click();
    cy.contains("Form Layouts").click();

    //by tag name
    cy.get("input");

    //by ID
    cy.get("#inputEmail1");

    //by Class name
    cy.get(".input-full-width");

    //by Attribute name
    cy.get("[placeholder]");

    //by Attribute name and value
    cy.get('[placeholder="Email"]');

    //by class value
    //cy.get('[class="input-full-width size-medium shape-rectangle"]')

    //by Tag name and Attribute with value
    cy.get('input[placeholder="Email"]');

    //by two different attribute
    cy.get('[placeholder="Email"][type="email"]');

    //by tag name, attribute with value, ID and Class name
    //cy.get('input[placeholder="Email"]#inputEmail1input-full-width')
  });

  it.only("second test", () => {
    cy.visit("/");
    cy.contains("Forms").click();
    cy.contains("Form Layouts").click();

    cy.contains("Sign in");

    cy.contains('[status="warning"]', "Sign in");

    cy.get("#inputEmail3")
      .parents("form")
      .find("button")
      .should("contain", "Sign in")
      .parents("form")
      .find('[class="custom-checkbox"]')
      .click();

    cy.contains("nb-card", "Horizontal form").find('[type="email"]');
  });

  it("then and wrap methods", () => {
    cy.visit("/");
    cy.contains("Forms").click();
    cy.contains("Form Layouts").click();

    // cy.contains("nb-card", "Using the Grid")
    //   .find('[for="inputEmail1"]')
    //   .should("contain", "Email");
    // cy.contains("nb-card", "Using the Grid")
    //   .find('[for="inputPassword2"]')
    //   .should("contain", "Password");
    // cy.contains("nb-card", "Basic form")
    //   .find('[for="exampleInputEmail1"]')
    //   .should("contain", "Email address");
    // cy.contains("nb-card", "Basic form")
    //   .find('[for="exampleInputPassword1"]')
    //   .should("contain", "Password");

    cy.contains("nb-card", "Using the Grid").then(firstform => {
      const emailLabelFirst = firstform.find('[for="inputEmail1"]').text();
      const passwordLabelFirst = firstform
        .find('[for="inputPassword2"]')
        .text();
      expect(emailLabelFirst).to.equal("Email");
      expect(passwordLabelFirst).to.equal("Password");

      cy.contains("nb-card", "Basic form").then(secondForm => {
        const passwordSecondText = secondForm
          .find('[for="exampleInputpassword1"]')
          .text();
        expect(passwordLabelFirst).to.equal(passwordSecondText);
        cy.wrap(secondForm)
          .find('[for="exampleInputPassword"]')
          .should("contain", "password");
      });
    });
  });
});
// cy.get('[data-testId="RoomManagement"]').then($Room => {
//   const RoomWidth = $Room.width();
//   const RoomHieght = $Room.height();

//   const BedroomX = RoomWidth * 0.35;
//   const BedroomY = RoomHieght * 0.1;
//   const LivingRoomX = RoomWidth * 0.7;
//   const LivingRoomY = RoomHieght * 0.1;
//   const KitchenX = RoomWidth * 0.35;
//   const KitchenY = RoomHieght * 0.1;
//   const HallwayX = RoomWidth * 0.7;
//   const HallwayY = RoomHieght * 0.1;

//   cy.wrap($Room);
//   cy.click(BedroomX, BedroomY);
//   cy.wait(1000);
//   cy.click(KitchenX, KitchenY);
//   cy.wait(1000);
//   cy.click(HallwayX, HallwayY);
//   cy.wait(1000);
//   cy.click(LivingRoomX, LivingRoomY);
// });

invoke("val", "80")
        .wait(200)
        .invoke("val", "70")
        .wait(200)
        .invoke("val", "60")
        .wait(200)
        .invoke("val", "50")
        .wait(200)
        .invoke("val", "40")
        .wait(200)
        .invoke("val", "30")
        .wait(200)
        .invoke("val", "20")
        .wait(200)
        .invoke("val", "10")
        .wait(200)
        .invoke("val", "0")
        .wait(200)
        .invoke("val", "10")
        .wait(200)
        .invoke("val", "20")
        .wait(200)
        .invoke("val", "30")
        .wait(200)
        .invoke("val", "40")
        .wait(200)
        .invoke("val", "50")
        .wait(200)
        .invoke("val", "60")
        .wait(200)
        .invoke("val", "70")
        .wait(200)
        .invoke("val", "80")
        .wait(200)
        .invoke("val", "90")
        .wait(200)
        .invoke("val", "100");

      IOTNavigate.VolumeControll()
        .invoke("val", "20")
        .wait(1000);
      IOTNavigate.VolumeControll()
        .invoke("val", "30")
        .wait(1000);
      IOTNavigate.VolumeControll()
        .invoke("val", "40")
        .wait(1000);
      IOTNavigate.VolumeControll()
        .invoke("val", "50")
        .wait(1000);
      IOTNavigate.VolumeControll()
        .invoke("val", "60")
        .wait(1000);
      IOTNavigate.VolumeControll()
        .invoke("val", "70")
        .wait(1000);
      IOTNavigate.VolumeControll()
        .invoke("val", "80")
        .wait(1000);
      IOTNavigate.VolumeControll()
        .invoke("val", "90")
        .wait(1000);
      IOTNavigate.VolumeControll()
        .invoke("val", "100")
        .wait(1000);
    });