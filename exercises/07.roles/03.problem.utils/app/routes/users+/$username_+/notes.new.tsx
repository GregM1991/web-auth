import { json } from '@remix-run/router'
import { type DataFunctionArgs } from '@remix-run/server-runtime'
import { NoteEditor, action } from './__note-editor.tsx'
import { requireUserId } from '~/utils/auth.server.ts'

export { action }

export async function loader({ request }: DataFunctionArgs) {
	await requireUserId(request)
	return json({})
}

export default function NewNoteRoute() {
	return <NoteEditor />
}
