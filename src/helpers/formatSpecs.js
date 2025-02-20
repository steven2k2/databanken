export default function formatSpecs (processor, ram, storage, os) {
  const specs = [processor, ram, storage].filter(Boolean).join(', ')
  return os ? `${specs} | ${os}` : specs
}
