using System;
using Microsoft.EntityFrameworkCore.Migrations;

namespace NewsPortal.Data.Migrations
{
    public partial class Newsv2 : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "News",
                columns: table => new
                {
                    NewsGuid = table.Column<Guid>(nullable: false),
                    Title = table.Column<string>(nullable: true),
                    Annotation = table.Column<string>(nullable: true),
                    Text = table.Column<string>(nullable: true),
                    CreateDate = table.Column<DateTime>(nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_News", x => x.NewsGuid);
                });

            migrationBuilder.CreateIndex(
                name: "IX_News_NewsGuid",
                table: "News",
                column: "NewsGuid",
                unique: true);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "News");
        }
    }
}
