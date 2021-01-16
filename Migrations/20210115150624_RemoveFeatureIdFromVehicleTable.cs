using Microsoft.EntityFrameworkCore.Migrations;

namespace vega.Migrations
{
    public partial class RemoveFeatureIdFromVehicleTable : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Vehicles_Features_FeatureId",
                table: "Vehicles");

            migrationBuilder.DropIndex(
                name: "IX_Vehicles_FeatureId",
                table: "Vehicles");

            migrationBuilder.DropColumn(
                name: "FeatureId",
                table: "Vehicles");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<int>(
                name: "FeatureId",
                table: "Vehicles",
                type: "INTEGER",
                nullable: true);

            migrationBuilder.CreateIndex(
                name: "IX_Vehicles_FeatureId",
                table: "Vehicles",
                column: "FeatureId");

            migrationBuilder.AddForeignKey(
                name: "FK_Vehicles_Features_FeatureId",
                table: "Vehicles",
                column: "FeatureId",
                principalTable: "Features",
                principalColumn: "Id",
                onDelete: ReferentialAction.Restrict);
        }
    }
}
