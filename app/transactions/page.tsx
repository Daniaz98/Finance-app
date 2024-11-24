import { ArrowDownUpIcon } from "lucide-react";
import { Button } from "../_components/ui/button";
import { DataTable } from "../_components/ui/data-table";
import { db } from "../_lib/prisma";
import { transactionColumns } from "./_columns";

const TransactionsPage = async () => {
  //acessar as transações do banco de dados
  const transactions = await db.transaction.findMany({});
  return (
    <div className="space-y-6 p-6">
      {/* Título e botão */}
      <div className="flex w-full items-center justify-between p-6">
        <h1 className="text-2xl font-bold">Transações</h1>
        <Button className="rounded-full font-bold">
          Adicionar transação
          <ArrowDownUpIcon className="ml-1" />
        </Button>
      </div>
      <DataTable columns={transactionColumns} data={transactions} />
    </div>
  );
};

export default TransactionsPage;
