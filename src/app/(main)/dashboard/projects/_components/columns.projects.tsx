import { ColumnDef } from "@tanstack/react-table";
import { EllipsisVertical } from "lucide-react";
import z from "zod";

import { DataTableColumnHeader } from "@/components/data-table/data-table-column-header";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";

import { projectsSchema } from "./schema";

export const projectsColumns: ColumnDef<z.infer<typeof projectsSchema>>[] = [
  {
    id: "select",
    header: ({ table }) => (
      <div className="flex items-center justify-center">
        <Checkbox
          checked={table.getIsAllPageRowsSelected()}
          onCheckedChange={(value) => table.toggleAllPageRowsSelected(!!value)}
          aria-label="Select all"
        />
      </div>
    ),
    cell: ({ row }) => (
      <div className="flex items-center justify-center">
        <Checkbox
          checked={row.getIsSelected()}
          onCheckedChange={(value) => row.toggleSelected(!!value)}
          aria-label="Select row"
        />
      </div>
    ),
    enableSorting: false,
    enableHiding: false,
  },
  {
    accessorKey: "id",
    header: ({ column }) => <DataTableColumnHeader column={column} title="Ref" />,
    cell: ({ row }) => <span className="tabular-nums">{row.original.id}</span>,
    enableSorting: false,
    enableHiding: false,
  },
  {
    accessorKey: "name",
    header: ({ column }) => <DataTableColumnHeader column={column} title="Name" />,
    cell: ({ row }) => <span>{row.original.name}</span>,
    enableHiding: false,
  },
  {
    accessorKey: "description",
    header: ({ column }) => <DataTableColumnHeader column={column} title="Description" />,
    cell: ({ row }) => <span>{row.original.description}</span>,
    enableSorting: false,
  },
  {
    accessorKey: "startDate",
    header: ({ column }) => <DataTableColumnHeader column={column} title="Start Date" />,
    cell: ({ row }) => <Badge variant="secondary">{row.original.startDate}</Badge>,
    enableSorting: false,
  },
  {
    accessorKey: "endDate",
    header: ({ column }) => <DataTableColumnHeader column={column} title="End Date" />,
    cell: ({ row }) => <Badge variant="outline">{row.original.endDate}</Badge>,
    enableSorting: false,
  },
  {
    accessorKey: "status",
    header: ({ column }) => <DataTableColumnHeader column={column} title="Status" />,
    cell: ({ row }) => <span className="text-muted-foreground tabular-nums">{row.original.status}</span>,
    enableSorting: false,
  },
  {
    accessorKey: "priority",
    header: ({ column }) => <DataTableColumnHeader column={column} title="Priority" />,
    cell: ({ row }) => <Badge variant="outline">{row.original.priority}</Badge>,
    enableSorting: false,
  },
  {
    accessorKey: "projectManager",
    header: ({ column }) => <DataTableColumnHeader column={column} title="Project Manager" />,
    cell: ({ row }) => <Badge variant="outline">{row.original.projectManager}</Badge>,
    enableSorting: false,
  },
  {
    accessorKey: "budget",
    header: ({ column }) => <DataTableColumnHeader column={column} title="Budget" />,
    cell: ({ row }) => <Badge variant="outline">{row.original.budget}</Badge>,
    enableSorting: false,
  },
  {
    accessorKey: "progress",
    header: ({ column }) => <DataTableColumnHeader column={column} title="Progress" />,
    cell: ({ row }) => <Badge variant="outline">{row.original.progress}</Badge>,
    enableSorting: false,
  },
  {
    accessorKey: "tasks",
    header: ({ column }) => <DataTableColumnHeader column={column} title="Tasks" />,
    cell: ({ row }) => <Badge variant="outline">{row.original.tasks}</Badge>,
    enableSorting: false,
  },
  {
    accessorKey: "percentageCompleted",
    header: ({ column }) => <DataTableColumnHeader column={column} title="Percentage Completed" />,
    cell: ({ row }) => <Badge variant="outline">{row.original.percentageCompleted}</Badge>,
    enableSorting: false,
  },
  {
    id: "actions",
    cell: () => (
      <Button variant="ghost" className="text-muted-foreground flex size-8" size="icon">
        <EllipsisVertical />
        <span className="sr-only">Open menu</span>
      </Button>
    ),
    enableSorting: false,
  },
];
