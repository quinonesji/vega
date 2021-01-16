using Microsoft.EntityFrameworkCore.Migrations;

namespace vega.Migrations
{
    public partial class VehicleFeature : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropPrimaryKey(
                name: "PK_VehicleFeatures",
                table: "VehicleFeatures");

            migrationBuilder.DropIndex(
                name: "IX_VehicleFeatures_VehicleId",
                table: "VehicleFeatures");

            migrationBuilder.AddColumn<int>(
                name: "FeatureId",
                table: "Vehicles",
                type: "INTEGER",
                nullable: true);

            migrationBuilder.AddPrimaryKey(
                name: "PK_VehicleFeatures",
                table: "VehicleFeatures",
                columns: new[] { "VehicleId", "FeatureId" });

            migrationBuilder.CreateIndex(
                name: "IX_Vehicles_FeatureId",
                table: "Vehicles",
                column: "FeatureId");

            migrationBuilder.CreateIndex(
                name: "IX_VehicleFeatures_FeatureId",
                table: "VehicleFeatures",
                column: "FeatureId");

            migrationBuilder.AddForeignKey(
                name: "FK_Vehicles_Features_FeatureId",
                table: "Vehicles",
                column: "FeatureId",
                principalTable: "Features",
                principalColumn: "Id",
                onDelete: ReferentialAction.Restrict);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Vehicles_Features_FeatureId",
                table: "Vehicles");

            migrationBuilder.DropIndex(
                name: "IX_Vehicles_FeatureId",
                table: "Vehicles");

            migrationBuilder.DropPrimaryKey(
                name: "PK_VehicleFeatures",
                table: "VehicleFeatures");

            migrationBuilder.DropIndex(
                name: "IX_VehicleFeatures_FeatureId",
                table: "VehicleFeatures");

            migrationBuilder.DropColumn(
                name: "FeatureId",
                table: "Vehicles");

            migrationBuilder.AddPrimaryKey(
                name: "PK_VehicleFeatures",
                table: "VehicleFeatures",
                columns: new[] { "FeatureId", "VehicleId" });

            migrationBuilder.CreateIndex(
                name: "IX_VehicleFeatures_VehicleId",
                table: "VehicleFeatures",
                column: "VehicleId");
        }
    }
}
