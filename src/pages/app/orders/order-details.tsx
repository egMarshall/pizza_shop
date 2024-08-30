import { DialogContent, DialogDescription, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Table, TableBody, TableCell, TableHead, TableRow, TableHeader, TableFooter } from '@/components/ui/table';

export function OrderDetails() {
  return (
    <DialogContent>
      <DialogHeader>
        <DialogTitle>Pedido 123</DialogTitle>
        <DialogDescription>Detalhes do Pedido</DialogDescription>
      </DialogHeader>

      <div className="space-y-6">
        <Table>
          <TableBody>
            <TableRow>
              <TableCell className="text-muted-foreground">Status</TableCell>
              <TableCell className="flex justify-end">
                <div className="flex items-center gap-2">
                  <span className="h-2 w-2 rounded-full bg-slate-400" />
                  <span className="font-medium text-muted-foreground">Pendente</span>
                </div>
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell className="text-muted-foreground">Cliente</TableCell>
              <TableCell className="flex justify-end">Boogie Jones</TableCell>
            </TableRow>

            <TableRow>
              <TableCell className="text-muted-foreground">Telefone</TableCell>
              <TableCell className="flex justify-end">(51) 991919191</TableCell>
            </TableRow>

            <TableRow>
              <TableCell className="text-muted-foreground">E-Mail</TableCell>
              <TableCell className="flex justify-end"> boogie@email.com</TableCell>
            </TableRow>

            <TableRow>
              <TableCell className="text-muted-foreground">Realizado há</TableCell>
              <TableCell className="flex justify-end"> minutos</TableCell>
            </TableRow>
          </TableBody>
        </Table>

        <Table>
          <TableHeader>
            <TableHead>Produto</TableHead>
            <TableHead className="text-right">Qnt.</TableHead>
            <TableHead className="text-right">Preço</TableHead>
            <TableHead className="text-right">Subtotal</TableHead>
          </TableHeader>
          <TableBody>
            <TableRow>
              <TableCell>Pizza Calabresa Grande</TableCell>
              <TableCell className="text-right">2</TableCell>
              <TableCell className="text-right">R$ 60,00</TableCell>
              <TableCell className="text-right">R$ 120,00</TableCell>
            </TableRow>

            <TableRow>
              <TableCell>Pizza Mussarela Média</TableCell>
              <TableCell className="text-right">1</TableCell>
              <TableCell className="text-right">R$ 40,00</TableCell>
              <TableCell className="text-right">R$ 40,00</TableCell>
            </TableRow>
          </TableBody>
          <TableFooter>
            <TableRow>
              <TableCell colSpan={3}>Total do Pedido:</TableCell>
              <TableCell className="text-right font-medium">R$ 160,00</TableCell>
            </TableRow>
          </TableFooter>
        </Table>
      </div>
    </DialogContent>
  );
}
