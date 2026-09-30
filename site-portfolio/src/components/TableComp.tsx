"use client";

import { panel } from "@/lib/ui";

export default function TableComp() {
  return (
    <div className={panel}>
      <table className="w-full border-collapse text-ink">
        <thead>
          <tr>
            <th
              scope="col"
              className="border-b border-panel-border px-3.5 py-3 text-left align-top text-[1.05rem]"
            >
              Command(s)
            </th>
            <th
              scope="col"
              className="border-b border-panel-border px-3.5 py-3 text-left align-top text-[1.05rem]"
            >
              Description
            </th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="whitespace-nowrap border-b border-panel-border px-3.5 py-3 align-top font-bold text-accent">
              /help
            </td>
            <td className="border-b border-panel-border px-3.5 py-3 align-top text-[0.92rem] text-muted">
              Displays the help menu - contains a list of commands.
            </td>
          </tr>
          <tr>
            <td className="whitespace-nowrap border-b border-panel-border px-3.5 py-3 align-top font-bold text-accent">
              /runtime
            </td>
            <td className="border-b border-panel-border px-3.5 py-3 align-top text-[0.92rem] text-muted">
              Shows how long the bot has been online.
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
